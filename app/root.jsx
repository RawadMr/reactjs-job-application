import { Outlet, Link } from '@remix-run/react';

export default function Root() {
    return (
        <div>
            <header>
                <h1>Employee Management System</h1>
                <nav>
                    <Link to="/employees">Employees</Link> |{' '}
                    <Link to="/timesheets">Timesheets</Link>
                </nav>
            </header>
            <main>
                <Outlet /> {/* This renders the nested routes */}
            </main>
        </div>
    );
}