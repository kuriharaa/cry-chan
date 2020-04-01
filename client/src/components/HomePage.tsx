import * as React from "react";
import {
  techSection,
  japaneseCultureSection,
  miscSection
} from "../../../shared/lib/static/BoardSections";
import toListOfLinks from "../helpers/toListOfLinks";
import Menu from "./Menu";
import MenuHead from "./MenuHead";
import MenuBody from "./MenuBody";

const HomePage = () => {
  const firstColumnItems = toListOfLinks(japaneseCultureSection.boardList);
  const secondColumnItems = toListOfLinks(techSection.boardList);
  const thirdColumnItems = toListOfLinks(miscSection.boardList);
  //const fourthColumnItems = toListOfLinks(anotherSection.boardList);
  const headRowItems = new Array(japaneseCultureSection.name, techSection.name, miscSection.name);

  return (
    <div className="anime-pic">
      		<div className="row align-items-start">
						<p className="boards-title w-100">B O A R D S</p>
					</div>
          <Menu>
            <MenuHead items={headRowItems}/>
            <MenuBody items={firstColumnItems} />
            <MenuBody items={secondColumnItems} />
            <MenuBody items={thirdColumnItems} />
            {/* <MenuBody items={fourthColumnItems} /> */}
          </Menu>
    </div>
  );
};

export default HomePage;
