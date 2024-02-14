import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ImageUploader() {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        required
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {selectedImage && <Image src={selectedImage} alt="Selected Image" />}
    </div>
  )
}
