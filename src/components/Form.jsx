import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import "./Form.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function ProductForm() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    console.log('Accepted files:', acceptedFiles);
    console.log('File rejections:', fileRejections);

    fileRejections.forEach(({ file, errors }) => {
      errors.forEach(e => {
        console.error(`Error with file ${file.name}: ${e.message}`);
      });
    });

    const newImages = acceptedFiles.map((file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
    });
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const handleRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedImages = Array.from(images);
    const [removed] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, removed);
    setImages(reorderedImages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    multiple: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);

    // Log formData values
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post('http://localhost:3200/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response:', response.data);
      alert('Produit ajouté avec succès');
      // Clear the form
      setImages([]);
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit', error);
    }
  };

  return (
    <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <input
                className="NameProductInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom de votre création"
                required
            />
            <div className="AddImages" {...getRootProps()}>
                <input {...getInputProps()}/>
                <p className="AddImagesText">Glissez-déposez des images ici, ou cliquez pour sélectionner des fichiers</p>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="images" direction="horizontal">
                {(provided) => (
                    <div className="ImagesPreviewContainer" {...provided.droppableProps} ref={provided.innerRef}>
                    {images.map((image, index) => (
                        <Draggable key={image.preview} draggableId={image.preview} index={index}>
                        {(provided) => (
                            <div
                            className="OneImagePreview"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{...provided.draggableProps.style }}
                            >
                                <img className="ImagesPreview" src={image.preview} alt="Preview" />
                                <button className="RemoveImage" type="button" onClick={() => handleRemove(index)}>X</button>
                            </div>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
                </Droppable>
            </DragDropContext>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Prix"
                required
            />
            <button className="SubmitButton" type="submit">Ajouter une création</button>
        </form>
    </div>
  );
}

export default ProductForm;
