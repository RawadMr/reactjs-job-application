// app/components/EmployeeForm.jsx
export default function EmployeeForm({ employee, onSubmit }) {
    return (
        <form onSubmit={onSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label style={styles.label}>Name:</label>
                <input type="text" name="name" defaultValue={employee?.name} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Email:</label>
                <input type="email" name="email" defaultValue={employee?.email} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Phone:</label>
                <input type="tel" name="phone_number" defaultValue={employee?.phone_number} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Date of Birth:</label>
                <input type="date" name="date_of_birth" defaultValue={employee?.date_of_birth} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Job Title:</label>
                <input type="text" name="job_title" defaultValue={employee?.job_title} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Department:</label>
                <input type="text" name="department" defaultValue={employee?.department} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Salary:</label>
                <input type="number" name="salary" defaultValue={employee?.salary} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Start Date:</label>
                <input type="date" name="start_date" defaultValue={employee?.start_date} required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>End Date:</label>
                <input type="date" name="end_date" defaultValue={employee?.end_date} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Photo:</label>
                <input type="file" name="photo" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>CV:</label>
                <input type="file" name="cv" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>ID:</label>
                <input type="file" name="id" style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Save</button>
        </form>
    );
}

const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};