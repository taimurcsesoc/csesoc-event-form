import React from 'react'
import { renderEmail } from 'react-html-email' 
import CustomEmail from './components/CustomEmail' 

export const sendEmailMarketing = (details) => {
	const recipient = details.cc
	const htmlEmail = renderEmail(
		<CustomEmail 
			title={`MARKETING REQUEST: ${details.eventName}`}
			subject={`MARKETING REQUEST: ${details.eventName}`}
			eventName={details.eventName}
			descrption={details.descrption}
			organiser={details.organiser}
			organiserEmail={details.organiserEmail}
			portfolio={details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
			location={details.location}
			date={details.date}
			start={details.start}
			end={details.end}
			links={details.links}
			pricing={details.pricing}
			attendance={details.attendance}
			notes={details.notesMarketing}
			message={
				`Tasks:
				- Make banner
				- Draft up marketing plan (who is posting what and when) and email to portfolio - make sure posts are scheduled beforehand
				- Once room booking is confirmed, put the event up on Facebook`}
		/>
	)
	return htmlEmail
}

export const sendEmailArcDelegate = (details) => {
	const recipient = `arc.delegate@csesoc.org.au`
	const htmlEmail = renderEmail(
		<CustomEmail 
			title={`ROOM BOOKING REQUEST: ${details.eventName}`}
			subject={`ROOM BOOKING REQUEST: ${details.eventName}`}
			eventName={details.eventName}
			descrption={details.descrption}
			organiser={details.organiser}
			organiserEmail={details.organiserEmail}
			portfolio={details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
			location={details.location}
			date={details.date}
			start={details.start}
			end={details.end}
			notes={details.notesArcDelegate}
			message={
				`Once the event is booked:
				- Confirm the booking with the organiser
				- Add the event to the corresponding portfolio calendar
				- Create a bark event at https://bark.csesoc.unsw.edu.au/admin/ and email the token to the organiser`}
		/>
	)
	return htmlEmail
}

export const sendEmailSecretary = (details) => {
	const recipient = `secretary@csesoc.org.au`
	const htmlEmail = renderEmail(
		<CustomEmail 
			title={`NEW EVENT FOR SOC ANNOUNCE: ${details.eventName}`}
			recipient={``}
			cc={``}
			subject={`NEW EVENT FOR SOC ANNOUNCE: ${details.eventName}`}
			eventName={details.eventName}
			descrption={details.descrption}
			organiser={details.organiser}
			organiserEmail={details.organiserEmail}
			portfolio={details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
			location={details.location}
			date={details.date}
			start={details.start}
			end={details.end}
			links={details.links}
			notes={details.notesSecretary}
			message={
				`Make sure to confirm details with organising portfolio before sending Soc Announce! 
				There is a chance the event details have changed. 
				Also, you may ask marketing for their event description if necessary.`}
		/>
	)
	return htmlEmail
}

export const sendEmailTreasurer = (details) => {
	const recipient = `treasurer@csesoc.org.au`
	const htmlEmail = renderEmail(
		<CustomEmail 
			title={`NEW EVENT: ${details.eventName}`}
			subject={`NEW EVENT: ${details.eventName}`}
			eventName={details.eventName}
			descrption={details.descrption}
			organiser={details.organiser}
			organiserEmail={details.organiserEmail}
			portfolio={details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
			location={details.location}
			date={details.date}
			start={details.start}
			end={details.end}
			pricing={details.pricing}
			shoppingList={details.pricing}
			notes={details.notesTreasurer}
		/>
	)
	return htmlEmail
}

export const sendEmailSocials = (details) => {
	const recipient = `social.events@csesoc.org.au`
	const htmlEmail = renderEmail(
		<CustomEmail 
			title={`SHOPPING LIST FOR: ${details.eventName}`}
			subject={`SHOPPING LIST FOR: ${details.eventName}`}
			eventName={details.eventName}
			descrption={details.descrption}
			organiser={details.organiser}
			organiserEmail={details.organiserEmail}
			portfolio={details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
			location={details.location}
			date={details.date}
			start={details.start}
			end={details.end}
			pricing={details.pricing}
			shoppingList={details.pricing}
			message={`If you cannot get certain items, please let the event organiser know ASAP!`}
		/>
	)
	return htmlEmail
}

export const sendEmailOrganiser = (details) => {
	const recipient = details.organiserEmail
	const htmlEmail = renderEmail(
		<CustomEmail 
			title={`NEW EVENT: ${details.eventName}`}
			subject={`NEW EVENT: ${details.eventName}`}
			eventName={details.eventName}
			descrption={details.descrption}
			organiser={details.organiser}
			organiserEmail={details.organiserEmail}
			portfolio={details.portfolio.charAt(0).toUpperCase() + details.portfolio.slice(1)}
			location={details.location}
			date={details.date}
			start={details.start}
			end={details.end}
			attendance={details.attendance}
			links={details.links}
			pricing={details.pricing}
			equipment={details.equipment}
			shoppingList={details.shoppingList}
		/>
	)
	return htmlEmail
}