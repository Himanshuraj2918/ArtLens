import React, { useState, useEffect } from 'react';
import { Palette, User, Calendar, MapPin, ExternalLink, Heart, Eye } from 'lucide-react';

const ArtCard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=32");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.data?.map((artwork) => (
        <div 
          key={artwork.id} 
          className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
        >
          <div className="w-full h-48 overflow-hidden bg-gray-100">
            {artwork.image_id ? (
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title || 'Artwork'}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <Palette size={48} className="text-gray-400" />
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
              {artwork.title || 'Untitled'}
            </h3>
            
            {artwork.artist_display && (
              <div className="flex items-center space-x-2 mb-2">
                <User size={14} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  {artwork.artist_display}
                </span>
              </div>
            )}

            {artwork.date_start && (
              <div className="flex items-center space-x-2 mb-3">
                <Calendar size={14} className="text-gray-500" />
                <span className="text-sm text-gray-600">
                  {artwork.date_start}
                </span>
              </div>
            )}

            {artwork.provenance_text && (
              <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {artwork.provenance_text}
              </p>
            )}

            <div className="space-y-1 mb-4">
              {artwork.medium_display && (
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Medium:</span> {artwork.medium_display}
                </div>
              )}
              
              {artwork.dimensions_detail && artwork.dimensions_detail.length > 0 && (
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Dimensions:</span>
                  {artwork.dimensions_detail[0].width && ` ${artwork.dimensions_detail[0].width}W`}
                  {artwork.dimensions_detail[0].height && ` X ${artwork.dimensions_detail[0].height}H`}
                </div>
              )}
              
              {artwork.place_of_origin && (
                <div className="text-xs text-gray-500 flex items-center">
                  <MapPin size={12} className="mr-1" />
                  <span className="font-medium">Location:</span> {artwork.place_of_origin}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart size={16} />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <Eye size={16} />
                  <span className="text-sm">View</span>
                </button>
              </div>
              
              <a 
                href={`https://www.artic.edu/artworks/${artwork.id}`}
                className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Learn more</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtCard;