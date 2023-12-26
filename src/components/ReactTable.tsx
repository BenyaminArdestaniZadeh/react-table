"use client";
import React, { useMemo, useState } from "react";
// **** in mData ro khodemon behesh dadim , hamon datayie k qarare azash estefade konim to table
import mData from "../data/FAKE_DATA.json";
//1)import some things from react table
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { typoVariant } from "@/src/theme/typo-vaiants";

const ReactTable = () => {
  //2)use data for table (mData) => because we must memorize the data , we use the useMemo
  //
  const data = useMemo(() => mData, []);

  //3) define array for columns
  // **** b tedade key-value hayi k to json darim bayad column tarif konim, pas 4ta mishe

  const columns = [
    {
      // ****in chizie k b onvane header qarare to table namayesh dade beshe
      header: "ID",
      //should be used to fetch data to be displayed inside the row
      // ****in datayie k to har kodom az row ha qarare zire on column namayesh dade beshe => hamon datayi k zire id qarar migire
      // ****in hamon chizi mishe k to json b onvane key tarif kardim , pas harchi onja neveshtim inja bayad hamono benevisim
      accessorKey: "id",
      //****footer vase table ye chize optionale , khasti minevisish
      footer: "ID",
    },

    // 6) marhaleye badi ine k shayad bekhaym dota laye header dorost konim , yani balaye first name va last name ye headere dg b esme name dshte bashim
    // **** nokteyebesiarmohemi k bayad behesh tavajo koni ine k agar b in sorat benevisim baqie header ha miad to headere top level dobare add mishan , vase hamin jayi k column haro ro to flexRender darim render mikonim bayad ye sharti benevisim => ye chizi dare b esme placeholder k agar chize dgi to headere top level tarif nakarde bashim miad baqeye headerhaye zirin ro b onvane placeholder dar nazar migire va onaro ezafe nmikone
    {
      header: "name",
      columns: [
        {
          header: "First Name",
          accessorKey: "first_name",
          footer: "First Name",
        },
        {
          header: "Last Name",
          accessorKey: "last_name",
          footer: "Last Name",
        },
      ],
    },

    // 5)agar bekhaym dota column ro bahm tarkib konim , masln first name o last name ro bahm tarkib konim va ye column jaddid b esme full name ejad konim in karo mikonim:
    // {
    //   header: "Full Name",
    //   //in ye funce k qarare ye kari anjam bde => darim migim to row bia in dotaro bahm tarkib kon
    //   accessorFn: (row): string => `${row.first_name} ${row.last_name}`,
    // },

    // {
    //   header: "First Name",
    //   accessorKey: "first_name",
    //   footer: "First Name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    //   footer: "Last Name",
    // },
    {
      header: "Age",
      accessorKey: "age",
      footer: "Age",
    },
    {
      header: "Date of Birth",
      accessorKey: "date_of_birth",
      footer: "Date of Birth",
      // masln fekr kon ma ye elemente dg vase birthday darim va mikhaym noe formatesh ro taqir bdim => chon type defaulti k barmigardone stringe va ma mikhaym typesh ro ba date hmahng konim , inja mitonim ye harekati bezanim: aval inke vase inkar bayad ye library nasb konim

      // cell : info => DateTime.fromISO(info.getvalue()).toLocalString(DateTime.DATE_MED)
    },
  ];
  //4) create an instance of our table
  // **** dota argoman migire useReactTable => 1-che datayi bayad namayesh bede k hala ya file jsone ya datayi k az api fetch shode 2-datayi k qarare to column ha namayesh dade beshe
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // 7) in func miad data ro mahdod mikone va ye pagination ijad mikone ta agar hajme dataye table ziad bod nayad fazaye ziadi ro eshqal kone balke biad pagination dorost kone , b noyi row e table ro mitonim control konim
    getPaginationRowModel: getPaginationRowModel(),
    // 8) dataye column haro bahash sort mikonim => az index sefr ta akhar ya barkas miad az index akhar ta sefr vase ma sort mikone , harekatayi k bayad bezanim b in sorate ,state bayad vase sort kardn tarif konim va onaro b table pas bdim
    getSortedRowModel: getSortedRowModel(),
    // 9)vase inm bayad state tarif konim
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  // az in table baraye namayesh data b sorate dynamic estefade mikonim
  return (
    <Flex
      width={"100%"}
      p={"4"}
      direction={"column"}
      justify={"start"}
      align={"center"}
      gap={"3"}
    >
      {/* 9-2) dorost kardne input vase filter => ba in harekat kheili rahat har datayi k bekhaym mitonim to tablemon peyda konim*/}
      <TextField.Input
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table>
        <thead>
          {/* tashkil qesmate header haye table (in vase kole table e)*/}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  // in onclick vase 8)e k vase sort kardne column ha tarif shode
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {/* sharti k to 6) goftm bayad benevisim */}
                  {header.isPlaceholder ? null : (
                    /* inja mikhaym datayi k qarare to header namayesh dade beshe ro piade konim => selsele marateb ba tavajo b chizi k map zadim piade sazi mikonim*/
                    // 8-3) vase rafe buge click kardn vase sort shodne column ha chon click k mikardi dorost kar nmikard va hamchenin vase headere toplevel nmikhastim in qazie emal beshe
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        // getContext vase gereftne dataye morede nazar
                        header.getContext()
                      )}
                      {
                        { acc: "up", desc: "down" }[
                          header.column.getIsSorted ?? null
                        ]
                      }
                    </div>
                  )}
                  {/* 8-2)shart vase neshon dadne noe sort kardn */}
                  {/* {
                        { acc:'up',desc:'down'}[
                          header.column.getIsSorted() ?? null
                        ]
                      } */}
                </th>
              ))}
            </tr>
            //aln to in qesmat dataye headere table ro b sorate dynamic piade kardim
          ))}
        </thead>
        <tbody>
          {/* dataye marbot b har row ro mikhaym piade konim */}
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {/* inja mikhay data row ro ba tavajo b har cell piade konim*/}
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot></tfoot> */}
      </table>
      <Flex gap={"3"} align={"center"} direction={"row-reverse"}>
        <Button
          variant="outline"
          radius="small"
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={() => table.setPageIndex(0)}
        >
          <Text {...typoVariant.title1}>Frist page</Text>
        </Button>
        <Button
          variant="outline"
          radius="small"
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {/* nokteye mohem => vaqti b page akhar miresim buttone next page bayad disable beshe va to safheye aval buttone previouse bayad disable bashe , vase in kar disable bayad vase har kodom tarif konim */}
          <Text {...typoVariant.title1}>Next page</Text>
        </Button>
        {/* dota funce getCanNextPage va getCanPreviousPage baraye peymayeshe safhe estefade mishan k safheyi hast bekhad bere b safheye bad ya qabl, va baraye disable kardne button ha to sharayete morede niaze => boolean return mikonn*/}
        <Button
          variant="outline"
          radius="small"
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <Text {...typoVariant.title1}>Previouse page</Text>
        </Button>
        <Button
          variant="outline"
          radius="small"
          color="gray"
          style={{ cursor: "pointer" }}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <Text {...typoVariant.title1}>Last page</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ReactTable;
