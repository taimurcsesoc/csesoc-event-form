import React from 'react'
import { Input, Button, Select } from 'antd'
import { withFormik }  from 'formik'
import Yup from 'yup'
import { 
	constructEmailMarketing,
	constructEmailSecretary, 
	constructEmailArcDelegate, 
	constructEmailTreasurer, 
	constructEmailSocials, 
	constructEmailOrganiser 
} from '../functions/EmailFunctions'
import '../styles/MainForm.css'

const { Option } = Select

const MainForm = (props) => {
	const { 
		values,
		errors,
		touched,
		handleChange,
		setFieldValue,
		handleSubmit,
	} = props

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-input">
				<h3>Event Name</h3>
			 	<Input type="text" name="eventName" value={values.eventName} onChange={handleChange}/>
			 	{touched.eventName && errors.eventName && <div className="error-text">{errors.eventName}</div>}
			</div>
			<div className="form-input">
				<h3>Organiser</h3>
				<Input type="text" name="organiser" value={values.organiser} onChange={handleChange}/>
				{touched.organiser && errors.organiser && <div className="error-text">{errors.organiser}</div>}
			</div>	
			<div className="form-input">
				<h3>Organiser Email</h3>
				<Input type="email" name="organiserEmail" value={values.organiserEmail} onChange={handleChange}/>
				{touched.organiserEmail && errors.organiserEmail && <div className="error-text">{errors.organiserEmail}</div>}
			</div>				
			<div className="form-input">
				<h3>Portfolio</h3>
				<Select value={values.portfolio} onChange={(choice)=> setFieldValue('portfolio', choice)}>
					<Option value="socials">Socials</Option>
					<Option value="careers">Careers</Option>
					<Option value="education">Education</Option>
				</Select>
				{touched.portfolio && errors.portfolio && <div className="error-text">{errors.portfolio}</div>}
			</div>
			<div className="form-input">
				<h3>Description</h3>
				<Input.TextArea name="description" value={values.description} onChange={handleChange}/>
				{touched.description && errors.description && <div className="error-text">{errors.description}</div>}
			</div>
			<div className="form-input">
				<h3>Date</h3>
				<Input type="date" name="date" value={values.date} onChange={handleChange}/>
				{touched.date && errors.date && <div className="error-text">{errors.date}</div>}
			</div>
			<div className="form-input">
				<h3>Start Time</h3>
				<Input type="time" name="start" value={values.start} onChange={handleChange}/>
				{touched.start && errors.start && <div className="error-text">{errors.start}</div>}
			</div>
			<div className="form-input">
				<h3>End Time</h3>
				<Input type="time" name="end" value={values.end} onChange={handleChange}/>
				{touched.end && errors.end && <div className="error-text">{errors.end}</div>}
			</div>
			<div className="form-input">
				<h3>Location</h3>
				<Input type="text" name="location" value={values.location} onChange={handleChange}/>
				{touched.location && errors.location && <div className="error-text">{errors.location}</div>}
			</div>
			<div className="form-input">
				<h3>Attendance Estimate</h3>
				<Input type="number" name="attendance" value={values.attendance} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Ticketing/Promotion Links</h3>
				<Input type="text" name="links" value={values.links} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Pricing</h3>
				<Input type="text" name="pricing" value={values.pricing} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Required Equipment</h3>
				<Input.TextArea rows="4" name="equipment" value={values.equipment} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Shopping List</h3>
				<Input.TextArea rows="4" name="shoppingList" value={values.shoppingList} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Notes for Marketing Director</h3>
				<Input.TextArea rows="4" name="notesMarketing" value={values.notesMarketing} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Notes for Arc Delegate</h3>
				<Input.TextArea rows="4" name="notesArcDelegate" value={values.notesArcDelegate} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Notes for Treasurer</h3>
				<Input.TextArea rows="4" name="notesTreasurer" value={values.notesTreasurer} onChange={handleChange}/>
			</div>
			<div className="form-input">
				<h3>Notes for Secretary</h3>
				<Input.TextArea rows="4" name="notesSecretary" value={values.notesSecretary} onChange={handleChange}/>
			</div>
			<div className="form-input">
       			<Button type="primary" htmlType="submit">Submit</Button>
      		</div>
		</form>
	)
}

export default withFormik({
	mapPropsToValues() {
		return {
			eventName: '',
			organiser: '',
			organiserEmail: '',
			portfolio: '',
			description: '',
			date: '',
			start: '',
			end: '',
			location: '',
			attendance: '',
			links: '',
			pricing: '',
			equipment: '',
			shoppingList: '',
			notesMarketing: '',
			notesArcDelegate: '',
			notesTreasurer: '',
			notesSecretary: '',
		}
	},
	validationSchema: Yup.object().shape({
		eventName: Yup.string().required('Event name required'),
		organiser: Yup.string().required('Event organiser required'),
		organiserEmail: Yup.string().email().required('Email required'),
		portfolio: Yup.string().required('Portfolio required'),
		description: Yup.string().required('Event description required'),
		date: Yup.date().required('Event date required'),
		start: Yup.string().required('Start time required'),
		end: Yup.string().required('End time required'),
		location: Yup.string().required('Event location required'),
	}),
	handleSubmit(values, {resetForm}){
		let cc = ''

		if (values.portfolio === 'education') {
			cc = `marketing@csesoc.org.au`
		} else {
			cc = `${values.portfolio}.marketing@csesoc.org.au`
		}
		const finalDetails = Object.assign({}, values, {cc: cc})
		
		let emailData = []
		emailData.push(constructEmailMarketing(finalDetails))
		emailData.push(constructEmailSecretary(finalDetails)) 
		emailData.push(constructEmailArcDelegate(finalDetails)) 
		emailData.push(constructEmailTreasurer(finalDetails)) 
		emailData.push(constructEmailSocials(finalDetails)) 
		emailData.push(constructEmailOrganiser(finalDetails))
		fetch('/api/send-emails', {
			headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
			method: "POST",
			body: JSON.stringify(emailData)
		}).then(res => {
			resetForm()
			alert("Emails successfully sent")
		})
	}
})(MainForm)