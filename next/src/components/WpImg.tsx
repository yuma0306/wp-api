/**
 * React Next
 */
import { useState, useEffect } from 'react';
import Image from 'next/image';
/**
 * Functions
 */
import { fetchImg } from '@/functions/fetchImg';
/**
 * Constants
 */
import { mediaUrl } from '@/constants/wp';
/**
 * Styles
 */
import styles from '@/styles/WpImg.module.css';

export default function WpImg({ imgID }: { imgID: number }) {
  // 画像のファイル名、幅、高さ、alt属性を格納
  const [imageFile, setImageFile] = useState<unknown>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [altText, setAltText] = useState<string>('');
  // 画像のURLを取得
  useEffect(() => {
    const getImageUrl = async () => {
      const mediaDetails = await fetchImg(imgID);
      setImageFile(mediaDetails.file);
      setImageDimensions({ width: mediaDetails.width as number, height: mediaDetails.height as number });
      setAltText(mediaDetails.alt);
    };
    getImageUrl();
  }, [imgID]);
  if (!imageFile || !imageDimensions) return null;

  return (
    <picture className={`${styles.WpImg}`}>
      <Image
        src={`${mediaUrl}${imageFile}`}
        alt={altText}
        width={imageDimensions.width}
        height={imageDimensions.height}
      />
    </picture>
  );
}
