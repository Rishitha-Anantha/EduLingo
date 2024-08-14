import RNFS from 'react-native-fs';
import SQLite from 'react-native-sqlite-storage';

const copyDatabase = async () => {
  const sourcePath = RNFS.MainBundlePath + '/assets/db/Arabic_Language.db'; // Source path
  const destinationPath = RNFS.DocumentDirectoryPath + '/Arabic_Language.db'; // Destination path

  try {
    await RNFS.copyFile(sourcePath, destinationPath);
    console.log('Database copied to Documents directory');
  } catch (error) {
    console.error('Error copying database:', error);
  }
};

const database = SQLite.openDatabase(
  {
    name: 'Arabic_Language.db',
    location: 'default', // For Android and iOS
  },
  () => console.log('Database opened successfully'),
  (error) => console.error('Database error:', error)
);

copyDatabase();
