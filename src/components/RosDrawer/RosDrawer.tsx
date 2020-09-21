import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: `${theme.spacing(2)} 0`,
  },
}));

const RosDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer className={classes.root} open variant="temporary">
      <div>Some odd stuff</div>
    </Drawer>
  );
};

export default RosDrawer;
