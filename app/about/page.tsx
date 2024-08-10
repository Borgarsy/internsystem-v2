
import React from "react"
import HomePage from "@/app/pages/main/aboutCYB/page"
import Layout from "@/app/pages/main/aboutCYB/layout"
import AppLayout from "@/app/pages/main/layout"

export default function MainPage() {

    return (
        <AppLayout>
            <Layout>
                <HomePage />
            </Layout>
        </AppLayout>
    )
};
