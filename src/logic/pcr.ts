import {
  getConnection,
  createQueryBuilder,
  createConnection,
  getManager,
} from 'typeorm';
import { UnitData } from '../entity/pcr/UnitData';
import { UnitRarity } from '../entity/pcr/UnitRarity';

interface Chara {
  prefabId: number;
  unitName: string;
  rarity: number;
  searchAreaWidth: number;
}
// if(search_area_width < 300) {
//     chara.position = "1";
//     chara.setPositionIcon(R.drawable.position_forward);
// } else if(search_area_width > 300 && search_area_width < 600){
//     chara.position = "2";
//     chara.setPositionIcon(R.drawable.position_middle);
// } else if(search_area_width > 600) {
//     chara.position = "3";
//     chara.setPositionIcon(R.drawable.position_rear);
// }
// SELECT  a.prefab_id, a.unit_name, max(b.rarity)  from unit_data a LEFT JOIN unit_rarity b WHERE a.unit_id = b.unit_id AND a.comment <> ''  GROUP BY a.prefab_id, a.unit_name;
export async function getCharaList(): Promise<Chara[]> {
  const connect = await getConnection('sqlite');
  const res: Chara[] = await connect
    .createQueryBuilder()
    .select('a.prefabId', 'prefabId')
    .addSelect('a.unitName', 'unitName')
    .addSelect('a.searchAreaWidth', 'searchAreaWidth')
    .addSelect('max(b.rarity)', 'rarity')
    .from(UnitData, 'a')
    .leftJoin(UnitRarity, 'b', 'a.unitId = b.unitId')
    .where("a.comment <> ''")
    .groupBy('a.prefabId')
    .getRawMany();
  return res;
}
