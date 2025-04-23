import { useState } from 'react';
import { IoFilterOutline } from "react-icons/io5";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import useFilterStore from '@/hooks/useFilterStore';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filter, setFilter } = useFilterStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <IoFilterOutline
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
        size={24}
      />

      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
            sx: {
              borderRadius: 3,
              backgroundColor: 'white',
              minWidth: 220,
              py: 0
            }
          }}

      >
        <DialogTitle sx={{color: '#09455D', fontWeight: 400, marginBottom : 0}}>Sort by:</DialogTitle>
        <List>
          <ListItem disablePadding divider sx={{ borderBottom: '1px solid #eee'  }}>
            <ListItemButton
              selected={filter === 'recorded'}
              onClick={() => {
                setFilter('recorded');
              }}
            >
              <ListItemText
                primary="Date recorded"  
                sx={{color : '#09455D'}}              
                />
                {filter === 'recorded' && (
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#09455D' }} />
                  </ListItemIcon>
                )}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding divider sx={{ borderBottom: '1px solid #eee' }}>
            <ListItemButton
              selected={filter === 'month'}
              onClick={() => {
                setFilter('month');
              }}
            >
              <ListItemText
                primary="Month"
                sx={{color : '#09455D'}}
                />
                {filter === 'month' && (
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#09455D' }} />
                  </ListItemIcon>
                )}
            </ListItemButton>
          </ListItem>

        
          <ListItem disablePadding divider sx={{ borderBottom: '1px solid white' }}>
            <ListItemButton
              selected={filter === 'name'}
              onClick={() => {
                setFilter('name');
              }}
            >
              <ListItemText
                primary="Name"
                sx={{color : '#09455D'}}
                />
                {filter === 'name' && (
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#09455D' }} />
                  </ListItemIcon>
                )}
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default Filter;
