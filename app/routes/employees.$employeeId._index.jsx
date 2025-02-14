
import { json, redirect } from '@remix-run/node';
import { useActionData, useNavigation, useLoaderData } from '@remix-run/react';
import { writeFile } from 'fs/promises';
import path from 'path';
import Database from 'better-sqlite3';
import EmployeeForm from '../components/EmployeeForm';

export async function loader({ params }) {
    const db = new Database('./app/db/database.sqlite');
    const employee = db.prepare('SELECT * FROM employees WHERE id = ?').get(params.employeeId);
    return json(employee);
}

export async function action({ request, params }) {
    const formData = await request.formData();

    const photo = formData.get('photo');
    let photoPath = null;
    if (photo) {
        const uploadPath = path.join(__dirname, '../public/uploads', photo.name);
        await writeFile(uploadPath, Buffer.from(await photo.arrayBuffer()));
        photoPath = '/uploads/' + photo.name;
    }

    const db = new Database('./app/db/database.sqlite');
    db.prepare(`
        UPDATE employees
        SET name = ?, email = ?, phone_number = ?, date_of_birth = ?, job_title = ?, department = ?, salary = ?, start_date = ?, end_date = ?, photo_path = ?
        WHERE id = ?
    `).run(
        formData.get('name'),
        formData.get('email'),
        formData.get('phone_number'),
        formData.get('date_of_birth'),
        formData.get('job_title'),
        formData.get('department'),
        formData.get('salary'),
        formData.get('start_date'),
        formData.get('end_date'),
        photoPath || formData.get('photo_path'),
        params.employeeId
    );


    return redirect('/employees');
}

export default function EditEmployee() {
    const employee = useLoaderData(); 
    const actionData = useActionData(); 
    const navigation = useNavigation(); 

    return (
        <div>
            <h1>Edit Employee</h1>
            <EmployeeForm employee={employee} onSubmit={(e) => e.preventDefault()} />
            <a href="/employees">Back to List</a>
        </div>
    );
}