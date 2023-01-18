import { makeStyles } from '@material-ui/core/styles';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Item({ id }) {
  const classes = useStyles();
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: 'ITEM' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Button
      ref={drag}
      className={classes.button}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      Drag Me
    </Button>
  );
}

function ItemList() {
  const items = [1, 2, 3, 4, 5];

  return (
    <DndProvider backend={HTML5Backend}>
      {items.map(item => (
        <Item key={item} id={item} />
      ))}
    </DndProvider>
  );
}

export default ItemList;

