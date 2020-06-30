import React from 'react'
import DeleteElements from '../components/deleteAppointments'
import ScreenContainer from '../components/screen'
import MenuHeader from '../components/MenuHeader'
import BottomNavBar from '../components/BottomNavBar/BottomBar'

function DeleteAppointments () {
    return (
        <div>
            <div className="header"></div>
            <ScreenContainer>
                <MenuHeader title="Edit & Delete Appointments" icon='burger'></MenuHeader>
                <DeleteElements />
                <BottomNavBar />
            </ScreenContainer>
            <div className="footer"></div>
        </div>
    )
}

export default DeleteAppointments