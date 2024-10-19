// components/CommunityOutreach.js
const CommunityOutreach = () => {
    const outreachPrograms = [
        {
            title: "Health Screening Events",
            date: "Every Saturday",
            description: "Free health screenings for blood pressure, cholesterol, and diabetes."
        },
        {
            title: "Nutrition Workshops",
            date: "Monthly",
            description: "Learn about healthy eating habits and meal planning from our nutritionists."
        },
        {
            title: "Mental Health Awareness Campaign",
            date: "October 20, 2024",
            description: "Join us for workshops and seminars to promote mental health in our community."
        }
    ];

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#2c3e50',
    };

    const outreachListStyle = {
        marginTop: '20px',
    };

    const programStyle = {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '15px',
        marginBottom: '15px',
        transition: 'box-shadow 0.3s',
    };

    const programHoverStyle = {
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const programTitleStyle = {
        color: '#2980b9',
        margin: '0 0 10px',
    };

    const programDateStyle = {
        color: '#7f8c8d',
        fontSize: '0.9em',
        margin: '0 0 10px',
    };

    const programDescriptionStyle = {
        lineHeight: '1.6',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Community Outreach Programs</h1>
            <div style={outreachListStyle}>
                {outreachPrograms.map((program, index) => (
                    <div 
                        key={index} 
                        style={{ ...programStyle, '&:hover': programHoverStyle }}
                    >
                        <h2 style={programTitleStyle}>{program.title}</h2>
                        <p style={programDateStyle}>{program.date}</p>
                        <p style={programDescriptionStyle}>{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityOutreach;
