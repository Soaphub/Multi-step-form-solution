import React from 'react';
import UseHooks from '@/Hooks/useHooks';
import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { validity} from "./redux/subscription"


const Plan = () => {
	const {screenSize, selectPlan, planNext} = UseHooks();
    const {planLevel, yearly}= useSelector((state) => state.plan);
    const dispatch= useDispatch();
    const router = useRouter();

    const handleCard= (e)=>{
        const id = e.target.id;
        if(planLevel){
            const prevCard= document.getElementById(planLevel);
            prevCard.classList.remove("edit");
        }
        selectPlan(id);
    }
    const handleSwitch=()=>{
        dispatch(validity());
    }
    const handleBack=(e)=>{
        e.preventDefault();
        router.push("/");
    }
    const handleNext=(e)=>{
        e.preventDefault();
        planNext();
    }

    return (
    <div id="plan" className={ screenSize ? 'pop-Up' : "content"}>
        <div>
            <h1>Select your plan</h1>
            <p>You have options of monthly or yearly billing.</p>
        </div>
        <div className='row mb-3'>
		    <div id="plan-select" className="plan-slected">
		      Please select a plan
		    </div>
            <div className='col-lg'>
                { screenSize ?
                <div onClick={handleCard} id="one-plan" className={planLevel==="one-plan" ? "card edit mb-3": "card mb-3"}> 
                    <div  id="one-plan" className='row'>
                        <div  id="one-plan" className='col-4'>
                            <img  id="one-plan" src="./images/icon-arcade.svg" className="card-img-top plan-icon mb-3" alt="acrade"></img>
                        </div>
                        <div  id="one-plan" className='col-8'>
                            <div  id="one-plan" className="card-body p-0">
                              <h2  id="one-plan" className="card-title">Arcade</h2>
                                { yearly===true ?
                                <>
                                    <p  id="one-plan" className="card-text mb-1">$90/yr</p>
                                    <h3 id="one-plan">2 months free</h3>
                                </>:
                                <>
                                    <p  id="one-plan" className="card-text">$9/mo</p>
                                </>
                                }
                            </div>
                        </div> 
                    </div> 
                </div>:
                <div onClick={handleCard} id="one-plan" className={planLevel==="one-plan" ? "card edit": "card"}> 
                        <img id="one-plan" src="./images/icon-arcade.svg" className="card-img-top plan-icon mb-3" alt="acrade"></img>
                        <div id="one-plan" className="card-body p-0">
                          <h2  id="one-plan"className="card-title">Arcade</h2>
                            { yearly===true ?
                            <>
                                <p  id="one-plan" className="card-text mb-1">$90/yr</p>
                                <h3 id="one-plan">2 months free</h3>
                            </>:
                            <>
                                <p  id="one-plan"className="card-text">$9/mo</p>
                            </>
                            }
                        </div>
                </div>}
            </div>
            <div className='col-lg'>
                { screenSize ?
                <div onClick={handleCard} id="sec-plan" className={planLevel==="sec-plan" ? "card edit mb-3": "card mb-3"}> 
                    <div  id="sec-plan" className='row'>
                        <div  id="sec-plan" className='col-4'>
                            <img  id="sec-plan" src="./images/icon-pro.svg" className="card-img-top plan-icon mb-3" alt="pro"></img>
                        </div>
                        <div  id="sec-plan" className='col-8'>
                            <div  id="sec-plan" className="card-body p-0">
                              <h2  id="sec-plan" className="card-title">Adcanced</h2>
                                { yearly===true ?
                                <>
                                    <p  id="sec-plan" className="card-text mb-1">$120/yr</p>
                                    <h3 id="sec-plan">2 months free</h3>
                                </>:
                                <>
                                    <p  id="sec-plan" className="card-text">$12/mo</p>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>:
                <div onClick={handleCard} id="sec-plan" className={planLevel==="sec-plan" ? "card edit": "card"}>
                    <img id="sec-plan" src="./images/icon-pro.svg" className="card-img-top plan-icon mb-3" alt="pro"></img>
                    <div id="sec-plan" className="card-body p-0">
                      <h2  id="sec-plan" className="card-title">Adcanced</h2>
                        { yearly===true ?
                        <>
                            <p  id="sec-plan" className="card-text mb-1">$120/yr</p>
                            <h3 id="sec-plan">2 months free</h3>
                        </>:
                        <>
                            <p  id="sec-plan" className="card-text">$12/mo</p>
                        </>
                        }
                    </div>
                </div>}
            </div>
            <div className='col-lg'>
                { screenSize ?
                <div onClick={handleCard} id="trd-plan" className={planLevel==="trd-plan" ? "card edit mb-3": "card mb-3"}>
                    <div  id="trd-plan" className='row'>
                        <div  id="trd-plan" className='col-4'>
                            <img  id="trd-plan" src="./images/icon-advanced.svg" className="card-img-top plan-icon mb-3" alt="advanced"></img>
                        </div>
                        <div  id="trd-plan" className='col-8'>
                            <div  id="trd-plan" className="card-body p-0">
                              <h2  id="trd-plan" className="card-title">Pro</h2>
                                { yearly===true ?
                                <>
                                    <p  id="trd-plan" className="card-text mb-1">$150/yr</p>
                                    <h3 id="trd-plan">2 months free</h3>
                                </>:
                                <>
                                    <p id="trd-plan" className="card-text">$15/mo</p>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>:
                <div onClick={handleCard} id="trd-plan" className={planLevel==="trd-plan" ? "card edit": "card"}>
                    <img id="trd-plan" src="./images/icon-advanced.svg" className="card-img-top plan-icon mb-3" alt="advanced"></img>
                    <div  id="trd-plan" className="card-body p-0">
                        <h2  id="trd-plan" className="card-title">Pro</h2>
                        { yearly===true ?
                        <>
                            <p  id="trd-plan" className="card-text mb-1">$150/yr</p>
                            <h3 id="trd-plan">2 months free</h3>
                        </>:
                        <>
                            <p  id="trd-plan" className="card-text">$15/mo</p>
                        </>
                        }
                    </div>
                </div>}
            </div>
        </div>
        <form >
            <div className={styles.validity}>
                <h2 onClick={handleSwitch} className={yearly===true ? styles.editplan: ""}>Montly</h2>
                <div className="form-check form-switch">
                    <input onClick={handleSwitch} className="form-check-input" type="checkbox"
                     checked={yearly===true ? true : false} readOnly></input>
                </div>
                <h2 onClick={handleSwitch} className={yearly===false ? styles.editplan: ""}>Yearly</h2>
            </div> 
            <div className={styles.back}>
                <button onClick={handleBack} className='btn btn-lg back-button'>Go Back</button>
                <input type='submit' onClick={handleNext} className="btn btn-lg next-button" value="Next Step"></input>
            </div>
        </form>
    </div>);
}

export default Plan;
