
import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewH1, CollectionPreviewContainer, CollectionPreviewSubContainer} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <CollectionPreviewH1>{title.toUpperCase()}</CollectionPreviewH1>
        <CollectionPreviewSubContainer>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(item =>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </CollectionPreviewSubContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;