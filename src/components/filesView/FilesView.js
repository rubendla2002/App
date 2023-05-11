import React, { useState, useEffect } from 'react'
import '../../styles/FilesView.css'
import NewFile from '../sidebar/NewFile'

import FileItem from './FileItem'
import { db } from '../../firebase'

const FilesView = () => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('PartesGuardados').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files)

    return (
        <div className='fileView'>
            <NewFile/>
            <div className="fileView__titles">
                <div className="fileView__titles--left">
                    <p>Nombre</p>
                </div>
                <div className="fileView__titles--right">
                    <p>Fecha Modificacion</p>
                    <p>Tamaño</p>
                </div>
            </div>
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FilesView
