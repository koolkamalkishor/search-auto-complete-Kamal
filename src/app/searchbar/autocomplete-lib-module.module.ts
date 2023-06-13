import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { HighlightPipe } from './autocomplete/highlight-pipe.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AutocompleteComponent, HighlightPipe],
  exports: [AutocompleteComponent, HighlightPipe],
})
export class AutocompleteLibModule {}
