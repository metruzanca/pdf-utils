import React, { useState } from 'react';

import { sendFile } from 'lib'

export function App() {
  const [files, setFiles] = useState<File[]>([])

  function changeHandler(e: any) {
    setFiles([
      ...files,
      e.target.files[0]
    ])
    console.log(e.target.files[0])
  }

  async function handleClick() {
    console.log(files);
    const response = await sendFile('/api/merge', files)
  }

  return (
    <div>
      <label htmlFor="fil1">First file</label>
      <input type="file" id="file1" onChange={changeHandler} />
      <label htmlFor="fil2">Second File</label>
      <input type="file" id="file2" onChange={changeHandler} />
      <button onClick={handleClick}>Merge</button>
    </div>
  );
}