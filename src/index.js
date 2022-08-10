import { random } from '@/utils';
import './index.scss';

$(document).ready(function () {
  console.log('我是首页大大', random());
  mini.parse();
  var grid = mini.get('datagrid1');
  grid.load();

  function onSearch() {
    mini.open({
      url: bootPATH + '../demo/CommonLibs/SelectGridWindow.html',
    });
  }
});
