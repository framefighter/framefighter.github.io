import React from "react";

interface AboutPageProps {
    text: string
}

function AboutPage(props: AboutPageProps) {
    const { text } = props;
    return <div className="padded_content">
        {text.split("\n").map((t, i) => <p key={i}>{t}</p>)}
        <p className="developer_note">Website made by @framefighter (GitHub)</p>
    </div>
}

export default AboutPage;