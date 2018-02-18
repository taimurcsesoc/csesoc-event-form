import React from 'react'
import { Box, Email, Item} from 'react-html-email'
// import logo from '../static/csesocwhiteblue.png'

export default (props) => {
	return (
	  <Email title={props.title}>
	    <Item  style={{padding: '10px'}}>
	    <h3>New event request from {props.organiser} for : {props.eventName}</h3>
	    <h2>EVENT DETAILS</h2>
	      <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
	        <Item>
  					<Item>Event name: {props.eventName}</Item>
	        	<Item>Event description: {props.description}</Item>
	        	<Item>Organiser: {props.organiser}</Item>
	        	<Item>Email: {props.organiserEmail}</Item>
	        	<Item>Portfolio: {props.portfolio}</Item>
	        	<Item>Date: {props.date}</Item>
	        	<Item>Start time (24 hr): {props.start}</Item>
	        	<Item>End time: {props.end}</Item>
	        	<Item>Event location: {props.location}</Item>
	        	{props.attendance && <Item>Estimated attendance: {props.attendance}</Item>}
	        	{props.links && <Item>Ticketing/marketing links: {props.location}</Item>}
	        	{props.pricing && <Item>Pricing details for members: {props.pricing}</Item>}
	        	{props.equipment && <Item>Equipment needed: {props.equipment}</Item>}
	        	{props.shoppingList && <Item>Add these to the shopping list this week: {props.shoppingList}</Item>}
	        	<Item>Notes: {props.notes}</Item>
	        	<Item>{`${props.message}`}</Item>
	        </Item>
	      </Box>
	    </Item>
	  </Email>
	)
} 