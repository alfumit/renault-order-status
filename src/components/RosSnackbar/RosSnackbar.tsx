import React, { useContext } from 'react';
import { Icon, IconButton, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessageContext from '../../contexts/MessageContext';

const useStyles = makeStyles({
  root: {
    opacity: 1,
  },
});

const RosSanckbar = (props: any) => {
  const { open = true, message = 'Default message', setOpen } = useContext(MessageContext);
  const classes = useStyles();

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        message={message}
        action={(
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <Icon>close</Icon>
          </IconButton>
          )}
      />
    </div>
  );
};

export default RosSanckbar;
