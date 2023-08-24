"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ImagePlus, Trash, Upload } from "lucide-react";
import Image from 'next/image'
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps{
    disable?: boolean;
    onChange: (value: string)=> void;
    value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
disable,onChange,value
}) => {
    const [mounted, setMounted] = useState(false);

    

    useEffect(() => {
        setMounted(true);
       }, []);

       const onUpload =(result: any)=>{
        onChange(result.info.secure_url)
    }
      
       if (!mounted) {
          return null;
       }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
        <CldUploadButton options={{maxFiles:1}} onUpload={onUpload} uploadPreset="ns2woo9y">
            <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
                <div className="relative h-40 w-40">
                    <Image
                    fill
                    alt="upload"
                    src={value || '/placeholder.svg'}
                    className=" rounded-lg object-cover"
                    />
                </div>
            </div>
        </CldUploadButton>
    </div>
  )
}

export default ImageUpload