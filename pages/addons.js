import React from 'react';
import UseHooks from '@/Hooks/useHooks';
import { useRouter } from 'next/router';
import { useSelector} from 'react-redux'

const Addons = () => {
	const {screenSize, checkAddOns, addOnsNext} = UseHooks();
    const {yearly, addOns} = useSelector((state) => state.plan);
    const router = useRouter();

    const filter1 = addOns.filter((add)=>add === "one-check"); 
    const add1 = filter1.toString();
    const filter2 = addOns.filter((add)=>add === "sec-check"); 
    const add2 = filter2.toString();
    const filter3 = addOns.filter((add)=>add === "trd-check"); 
    const add3 = filter3.toString();

    const handleCheck=(e)=>{
        const id=e.target.id;
        checkAddOns(id);
    }
    const handleBack=(e)=>{
        e.preventDefault();
        router.push("/plan");
    }
    const handleNext=(e)=>{
        e.preventDefault();
        addOnsNext();
    }

    return (
    <div id="add-ons" className={ screenSize ? 'pop-Up' : "content"}>
        <div>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <form>
            <div  id="one-checked" className={ add1 === "one-check" ?  "form-check mb-3 checked":"form-check mb-3"}>
                <input  onClick={handleCheck} id="one-check" className="form-check-input" type="checkbox" value=""
                checked={add1 ==="one-check" ? true : false} readOnly></input>
                <div className="addons">
                    <h2>Online Service</h2>
                    <p >Access to multiplayer game</p>
                </div>
                { yearly===true ?  <h3>+$10/yr</h3> : <h3>+$1/mo</h3> }
            </div>
            <div  id="sec-checked" className={ add2 === "sec-check" ?  "form-check mb-3 checked":"form-check mb-3"}>
                <input  onClick={handleCheck} id="sec-check" className="form-check-input" type="checkbox" value=""
                checked={add2 === "sec-check" ? true : false} readOnly></input>
                <div className="addons">
                    <h2>Large storage</h2>
                    <p >Extra 1TB of could save</p>
                </div>
                { yearly===true ?  <h3>+$20/yr</h3> : <h3>+$2/mo</h3> }
            </div>
            <div  id="trd-checked" className={ add3 === "trd-check" ?  "form-check mb-3 checked":"form-check mb-3"}>
                <input  onClick={handleCheck} id="trd-check" className="form-check-input" type="checkbox" value=""
                checked={ add3 === "trd-check" ? true : false} readOnly></input>
                <div className="addons">
                    <h2>Customizable profile</h2>
                    <p >Custom theme on your profile</p>
                </div>
                { yearly===true ?  <h3>+$20/yr</h3> : <h3>+$2/mo</h3> }
            </div> 
            <div className="back">
                <button onClick={handleBack} className='btn btn-lg back-button'>Go Back</button>
                <input onClick={handleNext} type='submit' className="btn btn-lg next-button" value="Next Step"></input>
            </div>
        </form>
    </div>
    );
}

export default Addons;
