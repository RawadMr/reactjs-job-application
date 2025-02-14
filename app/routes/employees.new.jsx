import { json, redirect } from '@remix-run/node';
import { useActionData, useNavigation } from '@remix-run/react';
import EmployeeForm from '../components/EmployeeForm';

export async function action({ request }) {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const photo = formData.get('photo'); 
    const db = new Database('./app/db/database.sqlite');
    db.prepare(`
        INSERT INTO employees (name, email, photo_path)
        VALUES (?, ?, ?)
    `).run(name, email, '/uploads/' + photo.name);

    return redirect('/employees');
}

export default function NewEmployee() {
    const actionData = useActionData(); 
    const navigation = useNavigation(); 

    return (
        <div>
            <h1>New Employee</h1>
            <EmployeeForm onSubmit={(e) => e.preventDefault()} />
            <a href="/employees">Back to List</a>
        </div>
    );
}