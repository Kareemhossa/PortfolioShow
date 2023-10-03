import styled from "styled-components";
import { motion } from "framer-motion";
// styled reusable componants
export const Containers = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 8rem;
  background-color: #1b1b1b;
  color: white;
  @media (max-width: 900px) {
    display: block;
    text-align: center;
    padding: 2rem;
  }
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 900px) {
    margin: 2rem 0rem 5rem 0rem;
  }
`;
export const Image = styled.div`
  flex: 1;
  z-index: 2;
  transition: all 0.4s ease;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 8px;
  }
  &:hover {
    filter: drop-shadow(rgba(36, 217, 150, 0.374) 0.9rem 0.5rem 25px);
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
