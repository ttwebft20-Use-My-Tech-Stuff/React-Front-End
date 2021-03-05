import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function ItemCard(props) {
  const {
    category,
    description,
    item_name,
    owner_username,
    price,
    id,
  } = props.item
  const classes = useStyles()
  const { push } = useHistory()

  const deleteItem = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .delete(`/tech_item/${id}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='card'>
      <h3>{item_name}</h3>
      <div className='cardcont'>
        <h4>${price} /per day</h4>
        <h4>Category: {category}</h4>
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className={classes.heading}>More Info</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <button>Contact {owner_username} to Rent Now</button>
        <div>
          <button onClick={() => push(`tech_items/${id}`)}>Edit</button>
          <button onClick={deleteItem}>Delete</button>
        </div>
      </div>
    </div>
  )
}
