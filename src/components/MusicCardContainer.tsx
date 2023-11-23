import { Box } from "rebass";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MusicCardContainer = ({ children }: Props) => (
  <Box overflow={"hidden"}>{children}</Box>
);

export default MusicCardContainer;
