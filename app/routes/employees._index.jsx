
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import Database from 'better-sqlite3';

export async function loader() {
    const db = new Database('./app/db/database.sqlite');
    const employees = db.prepare('SELECT * FROM employees').all();
    return json(employees);
}

export default function EmployeesList() {
    const employees = useLoaderData();

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Employees</h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Job Title</th>
                        <th style={styles.th}>Department</th>
                        <th style={styles.th}>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id} style={styles.tr}>
                            <td style={styles.td}>
                                <a href={`/employees/${employee.id}`} style={styles.link}>
                                    {employee.name}
                                </a>
                            </td>
                            <td style={styles.td}>{employee.email}</td>
                            <td style={styles.td}>{employee.job_title}</td>
                            <td style={styles.td}>{employee.department}</td>
                            <td style={styles.td}>{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="/employees/new" style={styles.button}>Add Employee</a>
            <a href="/timesheets" style={styles.button}>View Timesheets</a>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    th: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px',
        textAlign: 'left',
    },
    tr: {
        borderBottom: '1px solid #ccc',
    },
    td: {
        padding: '10px',
    },
    link: {
        color: '#28a745',
        textDecoration: 'none',
    },
    button: {
        display: 'inline-block',
        margin: '5px',
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        textAlign: 'center',
    },
};