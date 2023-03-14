import React from 'react';
import UseHooks from '@/Hooks/useHooks';
import { useRouter } from 'next/router';
import FinishingPage from '@/Components/FinishingPage';
import Link from 'next/link';
import { useSelector} from 'react-redux'

const Summary = () => {
	const {screenSize, confirm, confirmPlan} = UseHooks();
    const {planLevel, yearly, addOns, total} = useSelector((state) => state.plan);
    const router = useRouter();

    const handleBack=()=>{
        router.push("/addons");
    }
    const handleConfirm=()=>{
        confirmPlan();
    }

    return (
    <div id="summary" className={ screenSize ? 'pop-Up' : "content"}>
        {   confirm === false?
            <>
                <div>
                    <h1>Finishing up</h1>
                    <p>Double check everthing looks Ok before confirming.</p>
                </div>
                <div className="price">
                    <div className='row price-table'>
                        {   planLevel ?
                            <>
                                <div className='row price-table-header'>
                                    <div className='col-8'>
                                        <h2 style={{margin:0}}>
                                            { planLevel === "one-plan" ? "Acrade(" + (yearly===true ? "Yearly": "Monthly" ) +")" 
                                            : ( planLevel === "sec-plan" ? "Adcanced("+ (yearly===true ? "Yearly": "Monthly" ) +")" 
                                            : "Pro("+ (yearly===true ? "Yearly": "Monthly" ) +")" )}
                                        </h2>
                                        <Link className="summarylink" href="/plan">Change</Link>
                                    </div>
                                    <div className='col-4'>
                                        <h2>
                                            { planLevel === "one-plan" ? (yearly===true ? "$"+90+"/yr": "$"+9+"/mo" ) 
                                            : ( planLevel === "sec-plan" ? (yearly===true ? "$"+120+"/yr": "$"+12+"/mo") 
                                            : (yearly===true ? "$"+150+"/yr": "$"+15+"/mo"))}
                                        </h2>
                                    </div>
                                </div>
                                <>
                                {   addOns && addOns.map((add, index)=>{
                                    return(
                                    <div key={index} className='row'>
                                        <div  className='col-8'>
                                            <p>
                                                { add === "one-check" ? "Online Service" 
                                                : ( add === "sec-check" ? "Large storage" 
                                                : "Customizable profile")}
                                            </p>
                                        </div>
                                        <div  className='col-4'>
                                            <h3>
                                                { add === "one-check" ? (yearly===true ? "$"+10+"/yr": "$"+1+"/mo" ) 
                                                : ( add === "sec-check" ? (yearly===true ? "$"+20+"/yr": "$"+2+"/mo") 
                                                : (yearly===true ? "$"+20+"/yr": "$"+2+"/mo"))}
                                            </h3>
                                        </div>
                                    </div>)
                                    })
                                }
                                </>
                            </>:
                            <div className='row price-table-header'>
                                <Link className="summarylink" href="/plan">PLease select a plan</Link>
                            </div>
                        }
                    </div>
                    <div className='row total-price'>
                            <div className='col-8'>
                                <p>
                                    { "Total(" + (yearly===true ? "Yearly": "Monthly") +")" }
                                </p>
                            </div>
                            <div className='col-4'>
                                <h2 style={{"color": "hsl(243, 100%, 62%)"}}>
                                    {"$" + total + (yearly===true ? "/yr": "/mo")}
                                </h2>
                            </div>
                    </div>
                </div> 
                <div className="back">
                    <button onClick={handleBack} className='btn btn-lg back-button'>Go Back</button>
                    <button onClick={handleConfirm} className="btn btn-lg cofirm-button">Confirm</button>
                </div>
            </>:
            <FinishingPage/>
        }
    </div>);
}

export default Summary;


