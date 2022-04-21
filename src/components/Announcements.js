
import React from 'react'
import {IndividualAnnouncements} from './IndividualAnnouncements'

export const Announcements = ({announcements}) => {
    
    return announcements.map((IndividualAnnouncements)=>(
            <li>< IndividualAnnouncements key = {IndividualAnnouncements.ID} IndividualAnnouncements={IndividualAnnouncements}
           /></li>
    ))
}