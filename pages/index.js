import UseHooks from '@/Hooks/useHooks';
import React, {useEffect, useState} from 'react';
import styles from "../styles/Home.module.css"

const Index = () => {
	const {screenSize, validateForm} = UseHooks();

	const [data, setData]= useState({
		fullName : "",
		email: "",
		phone: ""
	})

	useEffect(() => {
		const localData= sessionStorage.getItem("form-data");
		if(localData){
			setData(JSON.parse(localData));
		}
	}, []);

	const handleSubmit=(e)=>{
		e.preventDefault();
		validateForm({e, data});
	}
	const handleFormData=(e)=>{
		setData({
			...data,
			[e.target.name] : e.target.value
		});
	}

  	return (
	<div className={ screenSize ? 'pop-Up' : "content"}>
		<div>
			<h1>Personal info</h1>
			<p>Please provide your name, email address, and phone number.</p>
		</div>
		<form className="needs-validation" noValidate>
			<div className="mb-3">
				<label htmlFor="validationCustom01" className="form-label">Name</label>
				<input type="text" className="form-control form-control-lg" id="validationCustom01" 
				onChange={handleFormData} placeholder="e.g. Stephen King" name='fullName'
				value={data.fullName} required></input>
				<div className="invalid-feedback">
				  Please enter your name
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlEmail1" className="form-label">Email address</label>
				<input type="email" className="form-control form-control-lg" id="exampleFormControlEmail1" 
				onChange={handleFormData} placeholder="e.g. stephenking@lorem.com" name="email"
				value={data.email} required></input>
				<div className="invalid-feedback">
				  Please enter valid email Id
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlPhoneNumber1" className="form-label">Phone Number</label>
				<input type="tel" className="form-control form-control-lg" id="exampleFormControlPhoneNumber1" 
				onChange={handleFormData} placeholder='eg. +1 234 567 890' value={data.phone} name="phone"
				required></input>
				<div className="invalid-feedback">
				  Please enter valid phone number
				</div>
			</div>
			<div className={styles.next}>
				<input onClick={handleSubmit} type='submit' id="next-button" className="btn btn-lg" value="Next Step"></input>
			</div>
		</form>
	</div>
 	);
}

export default Index;
