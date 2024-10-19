// components/HealthcareNews.js
const HealthcareNews = () => {
    const newsArticles = [
        {
            title: "New Healthcare Facility Opening Soon",
            date: "October 15, 2024",
            content: "A new state-of-the-art healthcare facility is set to open next month, providing advanced services to the community."
        },
        {
            title: "Flu Season Tips from Our Experts",
            date: "October 10, 2024",
            content: "Our healthcare professionals offer essential tips for staying healthy this flu season. Read more to learn how to protect yourself."
        },
        {
            title: "Health Fair Scheduled for November",
            date: "October 5, 2024",
            content: "Join us for our annual health fair featuring free screenings, wellness workshops, and more!"
        }
    ];

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textcolor: 'red',
        fontSize:'15px',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#2c3e50',
        fontsize: '20px'
    };

    const newsListStyle = {
        marginTop: '20px',
    };

    const articleStyle = {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '15px',
        marginBottom: '15px',
        transition: 'box-shadow 0.3s',
    };

    const articleHoverStyle = {
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const articleTitleStyle = {
        color: '#2980b9',
        margin: '0 0 10px',
    };

    const articleDateStyle = {
        color: '#7f8c8d',
        fontSize: '0.9em',
        margin: '0 0 10px',
    };

    const articleContentStyle = {
        lineHeight: '1.6',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Healthcare Center News</h1>
            <div style={newsListStyle}>
                {newsArticles.map((article, index) => (
                    <div 
                        key={index} 
                        style={{ ...articleStyle, '&:hover': articleHoverStyle }}
                    >
                        <h2 style={articleTitleStyle}>{article.title}</h2>
                        <p style={articleDateStyle}>{article.date}</p>
                        <p style={articleContentStyle}>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthcareNews;
