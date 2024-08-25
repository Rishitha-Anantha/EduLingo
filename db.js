import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const getDatabase = async () => {
  // Ensure the database file is in the app's file system
  const dbName = 'Arabic_Language.db';
  const asset = Asset.fromModule(require('./assets/www/' + dbName));
  await asset.downloadAsync();

  const dbUri = `${FileSystem.documentDirectory}${dbName}`;
  await FileSystem.writeAsStringAsync(dbUri, await FileSystem.readAsStringAsync(asset.localUri));

  // Open the SQLite database
  return SQLite.openDatabaseSync(dbName);
};

export default getDatabase;
