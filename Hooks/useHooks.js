import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import {useSelector, useDispatch} from 'react-redux';
import { level, extraPlan, removeExtraPlan, planTotal, addOnsTotal} from "../pages/redux/subscription";

const UseHooks = () => {
	const [screenSize, setScreenSize]= useState(false);
	const [confirm, setConfirm]= useState(false);
	const {planLevel, addOns} = useSelector((state) => state.plan);
	
    const router = useRouter();
	const dispatch= useDispatch();

	useEffect(() => {
		const mobileView= window.matchMedia("(max-width: 991.98px)");
		if(mobileView.matches){
			setScreenSize(true);
		}
	}, [])

	

	const validateForm=({e, data})=>{
  		// Fetch all the forms we want to apply custom Bootstrap validation styles to
  		const forms = document.querySelectorAll('.needs-validation');

  		// Loop over them and prevent submission
  		Array.from(forms).forEach(form => {
  		    if (!form.checkValidity()) {
  		      	e.preventDefault();
  		      	e.stopPropagation();
  		    }else{
				sessionStorage.setItem("form-data", JSON.stringify(data));
				router.push("/plan");
			}
			form.classList.add('was-validated');
  		})
	}

	const selectPlan=(id)=>{
        const curCard= document.getElementById(id);
        curCard.classList.add("edit");
		dispatch(level(id));
	}

	const planNext=()=>{
		const planSelect= document.getElementById("plan-select");
		if(planLevel){
			const planAmt = parseInt(document.querySelector("#"+planLevel+".card .card-text").textContent.match(/\d+/));
			dispatch(planTotal(planAmt));
			router.push("/addons");
		}else{
			planSelect.classList.remove("plan-slected");
			planSelect.classList.add("plan-noselect");
		}
	}

	const checkAddOns=(id)=>{
		const checkedBox= document.getElementById(id);
		const checkedDiv= document.getElementById(id+"ed");
		if(checkedBox.checked===true){
			checkedDiv.classList.add("checked");
			dispatch(extraPlan(id));
		}else{
			checkedDiv.classList.remove("checked");
			dispatch(removeExtraPlan(id));
		}
	}

	const addOnsNext= ()=>{
		const addplan=[];
		if(planLevel && addOns){
			addOns.forEach(add => {
				const addOnsAmt= parseInt(document.querySelector("#"+add+"ed h3").textContent.match(/\d+/));
				addplan.push(addOnsAmt);
			});
			if( addplan.length > 0){
				const toatalAddOns= addplan.reduce((pre,cur)=> pre + cur);
				dispatch(addOnsTotal(toatalAddOns));
			}
		}
        router.push("/summary");
	}

	const confirmPlan=()=>{
		if(planLevel){
			setConfirm(true);
		}
	}


    return {screenSize, confirm, selectPlan, validateForm, checkAddOns, planNext, addOnsNext, confirmPlan};
}

export default UseHooks;
