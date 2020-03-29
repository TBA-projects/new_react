import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Pagination = ({ idPerPage, totalIds, paginate}) => {
    const classes = useStyles();
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalIds / idPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className={classes.root}>
            <ButtonGroup size="small" variant="contained" color="primary" aria-label="contained primary button group">
                {pageNumbers.map((number, key) => (
                    <Button onClick={() => {paginate(number)}} key={key}>
                        {number}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
};

export default Pagination;