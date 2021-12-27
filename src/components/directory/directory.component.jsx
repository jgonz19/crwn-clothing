import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors"
import {DirectoryStyleContainer} from "./directory.styles";



const Directory = ({sections}) => (
  <DirectoryStyleContainer>
    {
      sections.map(({id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps} />))
    }
  </DirectoryStyleContainer> 
)

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);