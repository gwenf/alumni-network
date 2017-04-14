import React from 'react';
import DropdownMulti from '../../common/DropdownMulti';
import MessageBox from '../../common/MessageBox';
import DividingHeader from '../../common/DividingHeader';
import Ribbon from './common/RibbonHeader';

import { skills, interests } from '../../../assets/data/dropdownOptions';

const SkillsAndInterests = ({ showSkills, subSaveClick, showPopUp, toggle, handleSkillsChange, handleInterestsChange, coreSkills, codingInterests }) => {
  return (
    <div>
      <Ribbon
        showPopUp={showPopUp}
        id="skillsAndInterestsPopUp"
        showSave={showSkills}
        subSaveClick={subSaveClick}
        content="Skills & Interests"
        wrapperClass="skillsWrapper"
        onClick={()=>{toggle('showSkills')}} />
      <div className={`skillsPane ${showSkills ? 'show' : 'hide'}`}>
        <DividingHeader size="h4" content="Core Skills" icon="checkmark box icon" />
        <div className="spacer" />
        <MessageBox
          type="info"
          dismissable={true}
          message="Enter information about your coding skills below, so other users know your strengths!" />
        <DropdownMulti
          onChange={handleSkillsChange}
          options={skills}
          placeholder="Choose Skills"
          search={true}
          value={coreSkills} />
        <div className="spacer" />
        <DividingHeader size="h4" content="Coding Interests" icon="checkmark box icon" />
        <div className="spacer" />
        <MessageBox
          type="info"
          dismissable={true}
          message="Let other users know what you're into so you can find others with similar interetsts!" />
        <DropdownMulti
          onChange={handleInterestsChange}
          options={interests}
          placeholder="Choose Interests"
          search={true}
          value={codingInterests} />
        <div className="spacer" />
      </div>
    </div>
  );
}

export default SkillsAndInterests;
