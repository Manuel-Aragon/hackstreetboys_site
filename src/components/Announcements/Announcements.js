
import React from 'react'
import {IndividualAnnouncement} from './IndividualAnnouncement'

export const Announcements = ({announcements}) => {
    
    return announcements.map((individualAnnouncement)=>(
            <li>< IndividualAnnouncement key = {individualAnnouncement.ID} individualAnnouncement={individualAnnouncement}
           /></li>
    ))
}