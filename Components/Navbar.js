import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import UseHooks from '@/Hooks/useHooks';

const Navbar = () => {
	const {screenSize} = UseHooks();
    const router = useRouter();

    return (
    <>
		{screenSize ?
		<nav className='nav' aria-label="Page navigation example">
  			<ul className="pagination justify-content-center">
    			<li className="page-item">
                    <Link className={router.pathname == "/" ? "active" : ""} href="/">1</Link>
                </li>
    			<li className="page-item">
                    <Link className={router.pathname == "/plan" ? "active" : ""} href="/plan">2</Link>
                </li>
    			<li className="page-item">
                    <Link className={router.pathname == "/addons" ? "active" : ""} href="/addons">3</Link>
                </li>
    			<li className="page-item">
                    <Link className={router.pathname == "/summary" ? "active" : ""} href="/summary">4</Link>
                </li>
  			</ul>
		</nav>:
		<nav className='nav'>
			<ul className="nav flex-column">
				<li className="nav-item d-flex">
					<Link className={router.pathname == "/" ? "active" : ""} aria-current="page" href="/">1</Link>
                    <div>
                        <h1>STEP 1</h1>
					    <h2>YOUR INFO</h2>
                    </div>
				</li>
				<li className="nav-item d-flex">
					<Link className={router.pathname == "/plan" ? "active" : ""} href="/plan">2</Link>
                    <div>
                        <h1>STEP 2</h1>
					    <h2>SELECT PLAN</h2>
                    </div>
				</li>
				<li className="nav-item d-flex">
					<Link className={router.pathname == "/addons" ? "active" : ""} href="/addons">3</Link>
                    <div>
                        <h1>STEP 3</h1>
					    <h2>ADD-ONS</h2>
                    </div>
				</li>
				<li className="nav-item d-flex">
					<Link className={router.pathname == "/summary" ? "active" : ""} href="/summary">4</Link>
                    <div>
                        <h1>STEP 4</h1>
					    <h2>SUMMARY</h2>
                    </div>
				</li>
			</ul>
	  	</nav>
		}
    </>);
}

export default Navbar;
