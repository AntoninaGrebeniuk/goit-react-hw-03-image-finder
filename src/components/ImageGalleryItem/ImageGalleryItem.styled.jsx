import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  height: 260px;
  overflow: hidden;
  flex-basis: calc((100% - 90px) / 4);
  background-color: rgb(248, 248, 248);
  border-radius: 5px;
  transform: scale(1);
  cursor: zoom-in;
  box-shadow: 0px 5px 15px 2px #757575;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px 2px #3d3d3d;
  }
`;

export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
