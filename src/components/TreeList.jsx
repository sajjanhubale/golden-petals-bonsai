import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import treeListData from './treeListData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  listItemStyle: {
    width: '100%'
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

 function TitlebarGridList(props) {
  const classes = useStyles();
  function getCols(screenWidth) {
    if (isWidthUp('lg', screenWidth)) {
      return 5;
    }

    if (isWidthUp('md', screenWidth)) {
      return 3;
    }

    return 1;
  }
  const cols = getCols(props.width); // width is associated when using withWidth()
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={cols} className={classes.gridList}>
        
        {treeListData.map((tile) => (
          <GridListTile key={tile.img} lassName={classes.listItemStyle}>
            <img src={process.env.PUBLIC_URL + tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withWidth()(TitlebarGridList);