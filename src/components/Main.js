import React, { useState, useRef } from "react";
import styled from "styled-components";

const Main = (props) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedPhotos([...selectedPhotos, ...files]);
  };

  const handleStartPostClick = () => {
    fileInputRef.current.click();
  };

  const handleDeletePost = () => {
    setSelectedPhotos([]);
  };

  return (
    <Container>
      <ShareBox>
        <StartPostButton onClick={handleStartPostClick}>
          Start a Post
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            multiple
            style={{ display: "none" }}
          />
        </StartPostButton>
        <PostTextarea placeholder="What's on your mind?"></PostTextarea>
      </ShareBox>
      {selectedPhotos.length > 0 && (
        <SelectedPhotosContainer>
          {selectedPhotos.slice(0).reverse().map((photo, index) => (
            <SelectedPhotoWrapper key={index}>
              <SelectedPhoto src={URL.createObjectURL(photo)} alt={`Uploaded ${index}`} />
              <PostActions>
                <Action>Like</Action>
                <Action>Comment</Action>
                <Action>Share</Action>
                <DropdownMenu>
                  <DropdownButton>...</DropdownButton>
                  <DropdownContent>
                    <DeleteButton onClick={handleDeletePost}>Delete</DeleteButton>
                  </DropdownContent>
                </DropdownMenu>
              </PostActions>
            </SelectedPhotoWrapper>
          ))}
        </SelectedPhotosContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const ShareBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 16px;
`;

const StartPostButton = styled.label`
  display: block;
  color: #0a66c2;
  cursor: pointer;
  margin-bottom: 8px;

  input {
    display: none;
  }
`;

const PostTextarea = styled.textarea`
  width: calc(100% - 32px); /* Width of the ShareBox minus padding */
  height: 100px; /* Set the desired height */
  resize: none; /* Disable textarea resizing */
  border: none;
  outline: none;
  font-size: 16px;
  font-family: Arial, sans-serif;
`;

const SelectedPhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SelectedPhotoWrapper = styled.div`
  position: relative;
`;

const SelectedPhoto = styled.img`
  width: 700px; /* Set the desired width */
  height: 400px; /* Set the desired height */
  object-fit: cover;
  border-radius: 5px;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const Action = styled.span`
  cursor: pointer;
  color: #333;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DeleteButton = styled.button`
  color: red;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;

export default Main;
