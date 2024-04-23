'use client'
import React,{useState} from "react";
import Image from "next/image";

export default function ImageUpload(){
    let [file, setFile] = useState();

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div>
            <p className="font-medium mb-4">Upload your EV image here, Please click Upload Image Button.</p>
            
            {file ? 
                <Image src={file} alt="" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="preview-content" /> :
                <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
            }
            <input type="file" id="input-file" name="input-file" accept="image/*" onChange={handleChange}  hidden/>
            <label className="btn-upload btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md mt-6 cursor-pointer" htmlFor="input-file">Upload Image</label>
        </div>
    )
}