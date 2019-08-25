import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output
} from "@angular/core";
import { FileItem } from "../models/file-item";

@Directive({
  selector: "[appNgDropFiles]"
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener("dragover", ["$event"])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  //Validaciones
  private _prevenirDeter(event) {
    event.preventDefaul();
    event.StopPropagation();
  }

  private _arachivoYaFueDroppeado(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        console.log("el archivo" + nombreArchivo + "ya fue agregado");
        return true;
      }
    }
  }
}
