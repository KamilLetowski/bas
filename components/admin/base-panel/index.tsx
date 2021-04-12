import GameForm from "@/components/games/game-form";
import Admin from "..";
import AccordionSection from "../accordion-section";

const BasePanel = () => {
  return <Admin>
    <AccordionSection label="Nowa gra" defaultExpanded>
      <GameForm />
    </AccordionSection>
  </Admin>
};

export default BasePanel;
