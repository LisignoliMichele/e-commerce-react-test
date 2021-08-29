import React from 'react';

import './preview-collection.component.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => ( 
   <div className="collection-preview">
      <h1 className='title'>{title}</h1>
      <div className='preview'>
         {
            items.map(({id, ...otherItemProps}) =>(
               <CollectionItem key={id} {...otherItemProps}/>
            ))
         }
      </div>
   </div>
);

export default CollectionPreview;